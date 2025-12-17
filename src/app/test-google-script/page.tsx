'use client';

import { useState } from 'react';

// Current Google Apps Script URL from your config
const CURRENT_URL = 'https://script.google.com/a/macros/apilets.com/s/AKfycbwbqHjDPmb9R-65my-JrBifQ50rQRWk2-zsel451XwYGT4tdU3gLx-HZjQx5Lp26R67/exec';

export default function TestGoogleScript() {
  const [testUrl, setTestUrl] = useState(CURRENT_URL);
  const [testData, setTestData] = useState({
    fullName: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    phone: '+1 555 123 4567',
    platform: 'Shopify',
    brief: 'Testing the Google Apps Script integration',
    interest: 'Just Exploring',
    newsletter: false,
  });
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const runTest = async (mode: 'no-cors' | 'cors') => {
    setIsLoading(true);
    const testResult: any = {
      mode,
      timestamp: new Date().toISOString(),
      url: testUrl,
      status: 'pending',
    };

    try {
      const startTime = Date.now();

      const response = await fetch(testUrl, {
        method: 'POST',
        mode: mode,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      const endTime = Date.now();
      testResult.duration = `${endTime - startTime}ms`;

      if (mode === 'cors') {
        testResult.status = response.status;
        testResult.statusText = response.statusText;
        testResult.ok = response.ok;

        try {
          const responseText = await response.text();
          testResult.responseText = responseText;
          try {
            testResult.responseJson = JSON.parse(responseText);
          } catch (e) {
            // Not JSON
          }
        } catch (e: any) {
          testResult.readError = e.message;
        }
      } else {
        // no-cors mode - can't read response
        testResult.status = 'Request sent (no-cors mode - cannot read response)';
        testResult.note = 'If no error was thrown, the request likely succeeded';
      }

      testResult.success = true;
    } catch (error: any) {
      testResult.success = false;
      testResult.error = error.message;
      testResult.errorType = error.name;
      testResult.errorStack = error.stack;
    } finally {
      setIsLoading(false);
      setResults((prev) => [testResult, ...prev]);
    }
  };

  const testWithCurl = () => {
    const curlCommand = `curl -X POST '${testUrl}' \\
  -H 'Content-Type: application/json' \\
  -d '${JSON.stringify(testData, null, 2)}'`;

    navigator.clipboard.writeText(curlCommand);
    alert('cURL command copied to clipboard! Run it in your terminal.');
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Google Apps Script Test Tool
          </h1>
          <p className="text-gray-600 mb-6">
            Test your Google Apps Script deployment and diagnose 401 errors
          </p>

          {/* URL Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Google Apps Script URL
            </label>
            <input
              type="text"
              value={testUrl}
              onChange={(e) => setTestUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              placeholder="https://script.google.com/macros/s/.../exec"
            />
            <div className="mt-2 space-y-1 text-sm">
              <p className="text-gray-600">
                ✓ <strong>Correct format:</strong>{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  https://script.google.com/macros/s/AKfycby.../exec
                </code>
              </p>
              <p className="text-red-600">
                ✗ <strong>Wrong (Library URL):</strong>{' '}
                <code className="bg-red-50 px-2 py-1 rounded">
                  https://script.google.com/macros/library/d/.../
                </code>
              </p>
              <p className="text-red-600">
                ✗ <strong>Wrong (Workspace URL):</strong>{' '}
                <code className="bg-red-50 px-2 py-1 rounded">
                  https://script.google.com/a/macros/apilets.com/s/.../exec
                </code>
              </p>
            </div>
          </div>

          {/* Test Data */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test Payload (JSON)
            </label>
            <textarea
              value={JSON.stringify(testData, null, 2)}
              onChange={(e) => {
                try {
                  setTestData(JSON.parse(e.target.value));
                } catch (err) {
                  // Invalid JSON - ignore
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              rows={10}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => runTest('cors')}
              disabled={isLoading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Test with CORS Mode
            </button>
            <button
              onClick={() => runTest('no-cors')}
              disabled={isLoading}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Test with No-CORS Mode
            </button>
            <button
              onClick={testWithCurl}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700"
            >
              Copy cURL Command
            </button>
            {results.length > 0 && (
              <button
                onClick={clearResults}
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
              >
                Clear Results
              </button>
            )}
          </div>

          {isLoading && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">Testing... Please wait...</p>
            </div>
          )}
        </div>

        {/* Quick Setup Guide */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-yellow-900 mb-3">
            🔧 Quick Fix for 401 Error
          </h2>
          <ol className="space-y-2 text-sm text-yellow-900">
            <li>
              <strong>1.</strong> Open your Google Apps Script project
            </li>
            <li>
              <strong>2.</strong> Click <strong>Deploy</strong> →{' '}
              <strong>New deployment</strong>
            </li>
            <li>
              <strong>3.</strong> Select type: <strong>Web app</strong>
            </li>
            <li>
              <strong>4.</strong> Set <strong>Execute as:</strong> Me (your email)
            </li>
            <li>
              <strong>5.</strong> Set <strong>Who has access:</strong>{' '}
              <strong className="text-red-600">Anyone</strong> (not "Anyone with
              Google account")
            </li>
            <li>
              <strong>6.</strong> Click <strong>Deploy</strong>
            </li>
            <li>
              <strong>7.</strong> Copy the new Web app URL and paste it above
            </li>
          </ol>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Test Results ({results.length})
            </h2>

            <div className="space-y-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-lg p-4 ${
                    result.success
                      ? 'border-green-300 bg-green-50'
                      : 'border-red-300 bg-red-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          result.success
                            ? 'bg-green-200 text-green-800'
                            : 'bg-red-200 text-red-800'
                        }`}
                      >
                        {result.success ? '✓ Success' : '✗ Failed'}
                      </span>
                      <span className="ml-3 text-sm text-gray-600">
                        {result.mode} mode
                      </span>
                      <span className="ml-3 text-sm text-gray-600">
                        {result.duration}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(result.timestamp).toLocaleTimeString()}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    {result.status && (
                      <div>
                        <strong className="text-gray-700">Status:</strong>{' '}
                        <span
                          className={
                            result.status === 200 || result.ok
                              ? 'text-green-700'
                              : 'text-red-700'
                          }
                        >
                          {result.status} {result.statusText}
                        </span>
                      </div>
                    )}

                    {result.note && (
                      <div>
                        <strong className="text-gray-700">Note:</strong>{' '}
                        <span className="text-gray-600">{result.note}</span>
                      </div>
                    )}

                    {result.error && (
                      <div>
                        <strong className="text-red-700">Error:</strong>{' '}
                        <span className="text-red-600 font-mono">
                          {result.error}
                        </span>
                      </div>
                    )}

                    {result.errorType && (
                      <div>
                        <strong className="text-red-700">Error Type:</strong>{' '}
                        <span className="text-red-600">{result.errorType}</span>
                      </div>
                    )}

                    {result.responseJson && (
                      <div>
                        <strong className="text-gray-700">Response:</strong>
                        <pre className="mt-1 bg-gray-100 p-3 rounded overflow-x-auto text-xs">
                          {JSON.stringify(result.responseJson, null, 2)}
                        </pre>
                      </div>
                    )}

                    {result.responseText && !result.responseJson && (
                      <div>
                        <strong className="text-gray-700">Response Text:</strong>
                        <pre className="mt-1 bg-gray-100 p-3 rounded overflow-x-auto text-xs">
                          {result.responseText}
                        </pre>
                      </div>
                    )}

                    <details className="mt-2">
                      <summary className="cursor-pointer text-gray-600 hover:text-gray-800">
                        View Full Details
                      </summary>
                      <pre className="mt-2 bg-gray-100 p-3 rounded overflow-x-auto text-xs">
                        {JSON.stringify(result, null, 2)}
                      </pre>
                    </details>
                  </div>

                  {/* Diagnostic Messages */}
                  {!result.success && (
                    <div className="mt-4 p-3 bg-white border border-red-200 rounded">
                      <p className="text-sm font-semibold text-red-800 mb-2">
                        💡 Suggested Fixes:
                      </p>
                      <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
                        {result.error?.includes('401') && (
                          <>
                            <li>
                              Check deployment settings: "Who has access" must be
                              "Anyone"
                            </li>
                            <li>Try creating a new deployment</li>
                            <li>
                              Make sure you're using the Web app URL, not Library
                              URL
                            </li>
                          </>
                        )}
                        {result.error?.includes('404') && (
                          <>
                            <li>The deployment URL is incorrect or expired</li>
                            <li>Create a new deployment and update the URL</li>
                          </>
                        )}
                        {result.error?.includes('CORS') && (
                          <>
                            <li>
                              CORS error is expected - try "no-cors" mode instead
                            </li>
                            <li>
                              Check your Google Sheets to see if data was saved
                            </li>
                          </>
                        )}
                        {!result.error?.includes('401') &&
                          !result.error?.includes('404') &&
                          !result.error?.includes('CORS') && (
                            <li>
                              Try testing with cURL command in terminal to bypass
                              browser restrictions
                            </li>
                          )}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documentation Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            For detailed setup instructions, see{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">
              GOOGLE_APPS_SCRIPT_VERIFICATION.md
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
