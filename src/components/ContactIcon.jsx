/** Fine, self-contained SVGs for the contact details. */
export default function ContactIcon({ name }) {
  const paths = {
    call: <path d="m5.5 3.5 3 1-.5 4-2 1a15 15 0 0 0 8.5 8.5l1-2 4-.5 1 3c.3 1-.4 2-1.5 2C10.5 20.5 3.5 13.5 3.5 5c0-1.1 1-1.8 2-1.5Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    location_on: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    schedule: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    whatsapp: <><path d="M5 18.5 3 21l.8-4.3a9 9 0 1 1 3.1 3Z" /><path d="m8.2 7.5 1.4 2.3-1 1.2a8 8 0 0 0 4.4 4.2l1.2-1 2.3 1.4c-.3 1.2-1.1 1.7-2.3 1.4-4.6-1.1-7.8-4.5-8.2-7.6-.1-1 .7-1.8 2.2-1.9Z" /></>,
  };
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
