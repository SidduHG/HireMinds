import { valueItems } from "../constants";

export function ValueStrip() {
  return (
    <section className="value-strip" aria-label="HireMinds value points">
      {valueItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label}>
            <Icon size={18} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </section>
  );
}
