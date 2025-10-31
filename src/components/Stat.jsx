export default function Stat({ icon, number }) {
  return (
    <div className="stats ">
      <div className="stat p-0 bg-transparent">
        <div className="stat-figure text-primary">{icon}</div>
        <div className="stat-title mb-3">Projects</div>
        <div className="stat-value text-primary">{number}</div>
      </div>
    </div>
  );
}
