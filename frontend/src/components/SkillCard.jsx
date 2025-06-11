import React from 'react'

function SkillCard({icon: Icon, name}) {
  return (
    <div className="flex bg-gray-800 rounded-md border-1 border-gray-900 p-2 items-center space-x-2">
        <Icon className="w-5 h-5" />
        <p>{name}</p>
    </div>
  );
}

export default SkillCard