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
        <div className='bg-black h-[70%] rounded-lg figma-container flex items-center justify-center relative'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className='absolute left-10 bottom-10 rounded-full border border-slate-600 p-1 flex gap-2 items-center'>
                <div className='bg-primary w-8 h-8 rounded-full '></div>
                <div className='text-slate-400 mr-3'>#1157FF</div>
            </div>
            <div className={`bg-primary text-white border-2 border-black inline py-1 px-3 rounded-md ${hovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
                style={{
                    position: 'absolute',
                    top: `calc(${mousePos.y}px + 0.5rem)`,
                    left: `calc(${mousePos.x}px + 0.5rem)`,
                }}
            >YOU</div>
            <div className='font-revelia text-9xl text-white text-center flex flex-col items-center justify-center'>
                <h1>I MAKE CLICKING ON WEBSITES</h1>
                <h1 className='text-primary hover:border-2 border-primary w-fit p-1'>WORTH IT</h1>
            </div>
        </div>
    </div>
  )
}

export default Landing