export default function Contact() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p>Email: your.email@example.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Office Locations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Main Office</h3>
                <p>123 Business Street</p>
                <p>City, State 12345</p>
                <p>Country</p>
              </div>
              {/* Add more office locations as needed */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 