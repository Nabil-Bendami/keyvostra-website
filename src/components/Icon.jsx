/** Thin wrapper around a Material Symbols glyph so call sites stay terse. */
export default function Icon({ name, className = "", fill = false }) {
  return (
    <span className={`material-symbols-outlined ${fill ? "icon-fill" : ""} ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
