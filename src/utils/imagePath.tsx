import React from 'react'

interface ImageModule {
  default: string;
}
const imagePaths:React.FC = () => {
  const imageModules = import.meta.glob<ImageModule>('../assets/images/*.{png,jpg,jpeg,svg}', { eager: true});
  const images = Object.values(imageModules).map(module => module.default);
  return (
    <div>
      
    </div>
  )
}

export default imagePaths
