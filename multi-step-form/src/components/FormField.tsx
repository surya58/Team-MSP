type Props = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  error?: string;
};

export default function FormField({ label, value, onChange, placeholder, error }: Props) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <input
        className={`w-full border rounded px-3 py-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
