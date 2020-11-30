import { useEffect, useState } from 'react'

const MeshCanvas = (props) => {

  const [mesh, setMesh] = useState({ faces: [], vertices: [] });

  useEffect(() => {
    setMesh((currentMesh) => ({
      ...currentMesh,
      ...props.mesh
    }))
  }, [props.mesh]);

  return (
    <svg
      style={{ borderRadius: 8 }}
      width="100%"
      viewBox={`0 0 ${props.width || 100} ${props.height || 50}`}
      xmlns="http://www.w3.org/2000/svg">
      <image href={props.image} width="100%" />
      <g>
        {mesh.faces.map((face, index) => (
          <polygon
            key={index}
            points={
              face.map(faceIndex => `${mesh.vertices[faceIndex].x}, ${mesh.vertices[faceIndex].y} `).join(' ')}
            stroke='yellow'
            fill='transparent'
            strokeWidth={2}
          />
        ))}
      </g>
    </svg>
  )
};

export default MeshCanvas;