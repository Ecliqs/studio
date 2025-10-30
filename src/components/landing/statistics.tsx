export function Statistics() {
  const stats = [
    {
      value: '1000+',
      label: 'Patients Treated',
    },
    {
      value: '20+',
      label: 'Years of Experience',
    },
    {
      value: '95%',
      label: 'Client Satisfaction',
    },
    {
      value: '3B',
      label: 'Holistic Approach',
    },
  ];

  return (
    <div className="bg-secondary py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
                {stat.value}
              </h3>
              <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
