const FooterEditor = ({ footerText, setFooterText }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium">Footer Text</label>
      <textarea
        required
        value={footerText}
        onChange={(e) => setFooterText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mt-1"
        rows="3"
      />
    </div>
  );
};

export default FooterEditor;
