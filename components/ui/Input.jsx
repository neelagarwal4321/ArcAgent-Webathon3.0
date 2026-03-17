export default function Input({ label, name, type = 'text', value, onChange, placeholder, required = false, options = [], rows = 4, error }) {
  const inputCls = `w-full bg-surface-2 border rounded-input px-4 py-3 font-figtree text-sm text-text-primary placeholder:text-text-muted transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 ${error ? 'border-danger' : 'border-[rgba(10,15,44,0.1)]'}`;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={name} className="font-figtree text-sm font-medium text-text-secondary">
          {label}{required && <span className="text-danger ml-0.5">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} rows={rows} className={`${inputCls} resize-none`} />
      ) : type === 'select' ? (
        <select id={name} name={name} value={value} onChange={onChange} required={required} className={inputCls}>
          <option value="">Select...</option>
          {options.map((o) => <option key={o.value || o} value={o.value || o}>{o.label || o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} className={inputCls} />
      )}
      {error && <p className="text-xs text-danger font-figtree">{error}</p>}
    </div>
  );
}
