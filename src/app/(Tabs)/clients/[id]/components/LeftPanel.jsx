export default function LeftPanel() {
  return (
    <div className="p-4">
      <h2 className="text-sm font-semibold text-gray-500">DISPLAY NAME</h2>
      <p className="mb-4">No Display Name</p>

      <h2 className="text-sm font-semibold text-gray-500">PHONE NUMBER</h2>
      <p className="mb-4">+91 8781877445</p>

      <h2 className="text-sm font-semibold text-gray-500">WHATSAPP</h2>
      <p className="mb-4">+91 8781877445</p>

      <h2 className="text-sm font-semibold text-gray-500">EMAIL</h2>
      <p className="mb-4 break-words">mayank.mishra.5425@gmail.com</p>

      <h2 className="text-sm font-semibold text-gray-500">OPPORTUNITY SIZE</h2>
      <p className="mb-4">--</p>

      <h2 className="text-sm font-semibold text-gray-500">LEAD STAGE</h2>
      <p className="mb-4">--</p>

      <h2 className="text-sm font-semibold text-gray-500">NOTES</h2>
      <textarea
        placeholder="Enter your notes here"
        className="w-full border p-2 h-32 rounded"
      ></textarea>
    </div>
  );
}
