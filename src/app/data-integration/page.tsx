'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Configuration for Google Apps Script integration
const FORM_CONFIG = {
  // GOOGLE_SCRIPT_URL: '[https://script.google.com/a/macros/apilets.com/s/AKfycbzdbfFTq6xyZAajXxJo92r7YCgcutc1ke49JiDcSCl8ZyyG3Ek20RkV9L6YlB4wkkhO/exec]', // Replace with your Google Apps Script deployment URL
  // GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/library/d/1q3hf3cbKB5voWxMXzpkXsd5xpLBVEshCNDE1sXsF7IDap7zMrQpoHtKs/3', // Replace with your Google Apps Script deployment URL
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwbqHjDPmb9R-65my-JrBifQ50rQRWk2-zsel451XwYGT4tdU3gLx-HZjQx5Lp26R67/exec',
  COMPANY_NAME: 'Apilets',
  CONTACT_EMAIL: 'info@apilets.com',
  SUCCESS_MESSAGE_DURATION: 5000,

  PLATFORMS: [
    'Shopify',
    'BigCommerce',
    'Magento',
    'WooCommerce',
    'Commercetools',
    'SAP Hybris',
    'Custom Built',
    'Other',
  ],

  INTERESTS: [
    'Reverse ETL',
    'Real-time Inventory Sync',
    'Data Migration',
    'Custom Integration',
    'Ecommerce Data Integration',
    'Schedule a Demo',
    'Just Exploring',
  ],
};

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional().refine(
    (val) => !val || /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(val),
    { message: 'Please enter a valid phone number' }
  ),
  platform: z.string().optional(),
  brief: z.string().max(500, 'Description must be less than 500 characters').optional(),
  interest: z.string().optional(),
  newsletter: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

// Connection types data
const connectionTypes = [
  {
    category: 'DATABASE',
    items: [
      { name: 'PostgreSQL', description: 'PostgreSQL relational database', icon: '🗄️' },
      { name: 'MySQL', description: 'MySQL relational database', icon: '🗄️' },
    ],
  },
  {
    category: 'NOSQL DATABASE',
    items: [
      { name: 'MongoDB', description: 'MongoDB document database', icon: '🍃' },
      { name: 'Redis', description: 'Redis key-value store', icon: '⚡' },
    ],
  },
  {
    category: 'CLOUD STORAGE',
    items: [
      { name: 'Amazon S3', description: 'Amazon S3 object storage', icon: '☁️' },
      { name: 'Azure Blob Storage', description: 'Azure Blob Storage / Data Lake', icon: '☁️' },
      { name: 'Google Cloud Storage', description: 'Google Cloud Storage buckets', icon: '☁️' },
    ],
  },
  {
    category: 'FILE STORAGE',
    items: [
      { name: 'Local File System', description: 'Local file system storage', icon: '📁' },
      { name: 'SFTP Server', description: 'Secure File Transfer Protocol server', icon: '🔐' },
    ],
  },
  {
    category: 'API CONNECTORS',
    items: [
      { name: 'Commercetools', description: 'E-commerce platform API', icon: '🛍️' },
      { name: 'REST API', description: 'Generic REST API endpoints', icon: '🔌' },
      { name: 'Webhooks', description: 'Real-time webhook endpoints', icon: '⚡' },
    ],
  },
];

// Pipeline stages data
const pipelineStages = [
  { name: 'Raw Ingestion', description: 'Choose your data source', status: 'completed', icon: '📥' },
  { name: 'Data Quality', description: 'Validate and clean data', status: 'completed', icon: '✓' },
  { name: 'Data Correction', description: 'Correct data issues', status: 'skipped', icon: '🔧' },
  { name: 'Data Mapping', description: 'Map to target schema', status: 'completed', icon: '🔀' },
  { name: 'Final Load', description: 'Load to destination', status: 'completed', icon: '✅' },
];

export default function DataIntegration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submittedEmail, setSubmittedEmail] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<'visual' | 'advanced' | 'functions'>('visual');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Auto-hide success message after configured duration
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, FORM_CONFIG.SUCCESS_MESSAGE_DURATION);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Prepare payload matching Google Apps Script requirements
      const payload = {
        fullName: data.fullName,
        email: data.email,
        company: data.company || '',
        phone: data.phone || '',
        platform: data.platform || '',
        brief: data.brief || '',
        interest: data.interest || '',
        newsletter: data.newsletter || false,
      };

      // Submit to Google Apps Script
      // Note: Using no-cors mode as required by Google Apps Script
      await fetch(FORM_CONFIG.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Since no-cors doesn't allow reading response, assume success if no error thrown
      setSubmittedEmail(data.email);
      setSubmitStatus('success');
      reset();

      // Track with Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'data_nexus_registration',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(
        'Connection failed. Please check your internet and try again.'
      );
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Connect Your Ecommerce Data{' '}
              <span className="text-primary-600">Anywhere</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Enterprise-grade data integration made simple
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Seamlessly integrate data from your ecommerce platforms. Sync with marketing and CRM systems in real-time.
            </p>

            {/* 4-Step Process Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
              {['Select', 'Configure', 'Credentials', 'Test'].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold mx-auto mb-2">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{step}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('connections')}
                className="px-8 py-4 bg-primary-500 text-gray-900 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg"
              >
                See How It Works
              </button>
              <button
                onClick={() => scrollToSection('register')}
                className="px-8 py-4 bg-white text-primary-700 border-2 border-primary-500 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Get Started Free
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connections Section */}
      <section id="connections" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect Anything, Anywhere
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pre-built connectors for all your critical systems
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-12">
            {connectionTypes.map((category, catIndex) => (
              <div key={category.category}>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{item.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-1 group-hover:text-accent-400 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="px-2 py-1 bg-secondary-900 bg-opacity-50 text-secondary-400 text-xs rounded">
                          Active
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('sources-destinations')}
              className="px-6 py-3 bg-accent-600 text-white rounded-lg font-semibold hover:bg-accent-700 transition-colors"
            >
              Explore Our Connectors
            </button>
          </div>
        </div>
      </section>

      {/* Data Sources & Destinations Section */}
      <section id="sources-destinations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Data Routing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Define unlimited sources and destinations for each connection
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Data Sources Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center text-2xl">
                  📥
                </div>
                <h3 className="text-2xl font-bold text-white">Data Sources</h3>
              </div>

              <p className="text-gray-300 mb-6">
                Configure multiple data sources per connection
              </p>

              <div className="space-y-4 bg-slate-900 rounded-lg p-4">
                {/* Example Source 1 */}
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white">marketplace products</h4>
                    <span className="text-xs bg-accent-900 text-accent-300 px-2 py-1 rounded">s3_bucket</span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p><span className="text-gray-500">Bucket:</span> apilets-demo-dataset</p>
                    <p><span className="text-gray-500">Prefix:</span> /marketplace/sellers/products</p>
                    <p><span className="text-gray-500">Format:</span> CSV</p>
                    <p><span className="text-gray-500">Recursive:</span> true</p>
                  </div>
                </div>

                {/* Example Source 2 */}
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white">customer segment</h4>
                    <span className="text-xs bg-accent-900 text-accent-300 px-2 py-1 rounded">s3_bucket</span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p><span className="text-gray-500">Bucket:</span> apilets-demo-dataset</p>
                    <p><span className="text-gray-500">Prefix:</span> /crm/customers/segmentation/</p>
                    <p><span className="text-gray-500">Format:</span> JSON</p>
                    <p><span className="text-gray-500">Recursive:</span> true</p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-secondary-400">✓</span>
                  Support for various file formats (CSV, JSON, XML)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary-400">✓</span>
                  Prefix-based file organization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary-400">✓</span>
                  Recursive directory scanning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary-400">✓</span>
                  Smart file handling (ignore corrupt/missing files)
                </li>
              </ul>
            </motion.div>

            {/* Data Destinations Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-highlight-500 rounded-lg flex items-center justify-center text-2xl">
                  📤
                </div>
                <h3 className="text-2xl font-bold text-white">Data Destinations</h3>
              </div>

              <p className="text-gray-300 mb-6">
                Push data to any destination with intelligent batching
              </p>

              <div className="space-y-4 bg-slate-900 rounded-lg p-4">
                {/* Example Destination */}
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white">commercetools categories</h4>
                    <span className="text-xs bg-highlight-900 text-highlight-300 px-2 py-1 rounded">Api_commercetools</span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p><span className="text-gray-500">Staging:</span> Enabled</p>
                    <p><span className="text-gray-500">Container:</span> categories-test-202</p>
                    <p><span className="text-gray-500">Resource Type:</span> category</p>
                    <p><span className="text-gray-500">Max Retries:</span> 2</p>
                    <p><span className="text-gray-500">Batch Size:</span> 20</p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-secondary-400">✓</span>
                  Push data to any destination
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary-400">✓</span>
                  Batch processing capabilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary-400">✓</span>
                  Staging support for testing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary-400">✓</span>
                  Container-based organization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary-400">✓</span>
                  Resource type mapping
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Mapping Section */}
      <section id="mapping" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Data Your Way
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Visual and code-based mapping for ultimate flexibility
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700 mb-8">
              {[
                { id: 'visual' as const, label: 'Visual Mapping' },
                { id: 'advanced' as const, label: 'Advanced Transformations' },
                { id: 'functions' as const, label: 'Built-in Functions' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-3 font-semibold transition-colors ${
                    selectedTab === tab.id
                      ? 'text-accent-400 border-b-2 border-accent-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-slate-900 rounded-lg p-8">
              {selectedTab === 'visual' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Drag & Drop Interface</h3>
                  <p className="text-gray-400 mb-6">
                    No coding required for basic transformations. Simply drag fields from source to destination.
                  </p>
                  <div className="bg-slate-800 rounded-lg p-6 border-2 border-dashed border-gray-600">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">SOURCE FIELDS</h4>
                        <div className="space-y-2">
                          {['id', 'name', 'description', 'price', 'category'].map((field) => (
                            <div key={field} className="bg-slate-700 rounded px-3 py-2 text-white text-sm cursor-move hover:bg-slate-600">
                              {field}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">TARGET FIELDS</h4>
                        <div className="space-y-2">
                          {['product_id', 'title', 'details', 'amount', 'category_id'].map((field) => (
                            <div key={field} className="bg-slate-700 rounded px-3 py-2 text-white text-sm">
                              {field}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedTab === 'advanced' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">JSON Configuration Example</h3>
                  <p className="text-gray-400 mb-6">
                    Handle complex, multilingual data with nested object mapping and aggregation
                  </p>
                  <div className="bg-black rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono">
{`{
  "grouping": {
    "enabled": true,
    "group_by": ["key"],
    "aggregations": {
      "parent": {
        "type": "first",
        "column": "parent"
      },
      "names": {
        "type": "collect_unique",
        "column": "name"
      }
    }
  },
  "nested_objects": {
    "name": {
      "type": "multilingual",
      "key_column": "locale",
      "value_column": "localizedName"
    }
  },
  "mapping": {
    "key": "category.key",
    "parent": "category.parent.id",
    "name": "category.name"
  }
}`}
                    </pre>
                  </div>
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-accent-400 mb-2">✓ Grouping & Aggregation</h4>
                      <p className="text-sm text-gray-400">Transform flat data into nested structures with array aggregation</p>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-accent-400 mb-2">✓ Nested Object Mapping</h4>
                      <p className="text-sm text-gray-400">Handle complex, multilingual data with key-value transformations</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedTab === 'functions' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Built-in Transformation Functions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: 'Smart Grouping', desc: 'Group records by any field with aggregation' },
                      { name: 'Nested Objects', desc: 'Create complex nested object structures' },
                      { name: 'Multilingual', desc: 'Handle multi-language data transformations' },
                      { name: 'Regex Transform', desc: 'Pattern-based text transformations' },
                      { name: 'Array Operations', desc: 'Filter, map, and reduce array data' },
                      { name: 'Column Concatenation', desc: 'Combine multiple columns into one' },
                      { name: 'Type Conversion', desc: 'Convert between data types automatically' },
                      { name: 'Date Formatting', desc: 'Parse and format dates in any format' },
                    ].map((func, index) => (
                      <div key={index} className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors">
                        <h4 className="font-semibold text-white mb-1">{func.name}</h4>
                        <p className="text-sm text-gray-400">{func.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Job Execution Pipeline Section */}
      <section id="pipeline" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent, Reliable Data Pipelines
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Monitor every step of your data journey in real-time
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Execution Metrics Dashboard */}
            <div className="bg-slate-800 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-900 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Progress</p>
                  <p className="text-2xl font-bold text-secondary-400">100%</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Records Processed</p>
                  <p className="text-2xl font-bold text-white">551</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Total Records</p>
                  <p className="text-2xl font-bold text-white">551</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Failed Records</p>
                  <p className="text-2xl font-bold text-red-400">0</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-4">
                <div>
                  <span className="text-gray-500">Started:</span> 12/17/2025 1:53 AM
                </div>
                <div>
                  <span className="text-gray-500">Completed:</span> 12/17/2025 1:54 AM
                </div>
                <div>
                  <span className="text-gray-500">Duration:</span> 1 min
                </div>
              </div>
            </div>

            {/* Pipeline Stages */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {pipelineStages.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-xl p-6 border-2 ${
                    stage.status === 'completed'
                      ? 'border-secondary-400 shadow-lg shadow-secondary-100'
                      : stage.status === 'skipped'
                      ? 'border-gray-300'
                      : 'border-accent-400 shadow-lg shadow-accent-100'
                  }`}
                >
                  {/* Stage Number */}
                  <div
                    className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      stage.status === 'completed'
                        ? 'bg-secondary-500 text-white'
                        : stage.status === 'skipped'
                        ? 'bg-gray-400 text-white'
                        : 'bg-accent-500 text-white'
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-3xl mb-3 text-center">{stage.icon}</div>

                  {/* Stage Name */}
                  <h3 className="font-bold text-gray-900 text-sm mb-2 text-center">{stage.name}</h3>
                  <p className="text-xs text-gray-600 mb-4 text-center">{stage.description}</p>

                  {/* Status Badge */}
                  <div className="text-center">
                    {stage.status === 'completed' && (
                      <span className="inline-block px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                        ✓ Complete
                      </span>
                    )}
                    {stage.status === 'skipped' && (
                      <span className="inline-block px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                        Skipped
                      </span>
                    )}
                    {stage.status === 'active' && (
                      <span className="inline-block px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded-full animate-pulse">
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* View Data Button */}
                  {stage.status === 'completed' && (
                    <button className="mt-4 w-full px-3 py-1 bg-slate-800 text-white text-xs rounded hover:bg-slate-700 transition-colors">
                      View Data
                    </button>
                  )}

                  {/* Connection Line */}
                  {index < pipelineStages.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-4 h-0.5 bg-gray-300" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Final Status */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-accent-600 text-white rounded-lg font-semibold hover:bg-accent-700 transition-colors">
                View Final Status & Audit Trail
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: '🔒', label: 'Enterprise-grade security' },
              { icon: '⚡', label: '99.9% uptime SLA' },
              { icon: '📊', label: 'Real-time monitoring' },
              { icon: '📝', label: 'Comprehensive audit logs' },
              { icon: '👥', label: 'Role-based access control' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <p className="text-sm text-gray-300 font-medium">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="register" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Streamline Your Data Integration?
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Join companies that trust us with their critical data flows
              </p>
              <p className="text-sm text-gray-500">
                Get early access and exclusive updates about Data Nexus
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-800 font-semibold mb-2">✓ Thank you for registering!</p>
                  <p className="text-green-700 text-sm">
                    We've sent a verification email to <strong>{submittedEmail}</strong>.
                    Please check your inbox (and spam folder) and click the verification link to complete your registration.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-800 font-semibold mb-1">✗ Submission Failed</p>
                  <p className="text-red-700 text-sm">
                    {errorMessage || `Something went wrong. Please try again or email us at ${FORM_CONFIG.CONTACT_EMAIL}`}
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Row 1: Full Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Company & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Company Name"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: Platform & Interest */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Platform
                    </label>
                    <select
                      {...register('platform')}
                      id="platform"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select platform...</option>
                      {FORM_CONFIG.PLATFORMS.map((platform) => (
                        <option key={platform} value={platform}>
                          {platform}
                        </option>
                      ))}
                    </select>
                    {errors.platform && (
                      <p className="mt-1 text-sm text-red-600">{errors.platform.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      I'm interested in
                    </label>
                    <select
                      {...register('interest')}
                      id="interest"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select option...</option>
                      {FORM_CONFIG.INTERESTS.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="mt-1 text-sm text-red-600">{errors.interest.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 4: Brief Description */}
                <div>
                  <label htmlFor="brief" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your needs <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <textarea
                    {...register('brief')}
                    id="brief"
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Brief description of your integration requirements..."
                  />
                  {errors.brief && (
                    <p className="mt-1 text-sm text-red-600">{errors.brief.message}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">Maximum 500 characters</p>
                </div>

                {/* Row 5: Newsletter Checkbox */}
                <div className="flex items-start">
                  <input
                    {...register('newsletter')}
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    Subscribe to our newsletter for data integration tips and updates
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-8 py-4 bg-primary-500 text-gray-900 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Started'}
                  </button>
                  <Link
                    href="/contact"
                    className="flex-1 px-8 py-4 bg-white text-accent-700 border-2 border-accent-500 rounded-lg font-semibold hover:bg-accent-50 transition-colors text-center"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  <span className="inline-block px-2 py-1 bg-accent-100 text-accent-700 rounded text-xs font-medium mr-2">
                    As seen in demo
                  </span>
                  2,000+ records processed in seconds
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Data Integration?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Finally, a data integration tool that doesn't require a dedicated engineering team
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
