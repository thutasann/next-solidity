import React from 'react';

function Lorem() {
  return (
    <div className="text-white">
      {[12, 2, 2, 3, , , 4, 4, 45, 5, , 5, 5, 5, 5, 5, 5, 5].map((lroem) => (
        <div key={Math.random()}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis facere
          animi, iure tenetur quaerat aliquid repellat accusantium rem
          voluptatum, exercitationem vitae incidunt ad quos. Placeat, sequi?
          Tempora quidem officiis doloremque?
        </div>
      ))}
    </div>
  );
}

export default Lorem;
