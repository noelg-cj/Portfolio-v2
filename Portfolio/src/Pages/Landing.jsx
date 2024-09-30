import React from 'react'

const Landing = () => {
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
    const [hovered, setHovered] = React.useState(false);

    React.useEffect(() => {
        const onMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

  return (
    <div className='h-screen bg-white p-5'>
        <div className='bg-black h-[60%] rounded-lg figma-container'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`bg-primary text-white border-2 border-black inline py-1 px-3 rounded-md ${hovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
                style={{
                    position: 'absolute',
                    top: `calc(${mousePos.y}px + 1.5rem)`,
                    left: `calc(${mousePos.x}px + 1.5rem)`,
                }}
            >YOU</div>
        </div>
    </div>
  )
}

export default Landing