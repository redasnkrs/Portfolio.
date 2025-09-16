export function TodoList() {
  return (
    <section className='section'>
      <h2 className='text-4xl mb-4 text-center'>My goals I want to reach </h2>
      <div className='glass-card container-4xl'>

        {/* Simple todo list for reached and future goals */}
        <div className="mb-8">
          <h3 className="text-2xl mb-2">✅ Goals Reached</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Learned React fundamentals</li>
            <li>Built my personal portfolio website</li>
            <li>Completed several web projects</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-2">🎯 Goals To Reach</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Master TypeScript</li>
            <li>Contribute to open source projects</li>
            <li>Land a frontend developer internship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
