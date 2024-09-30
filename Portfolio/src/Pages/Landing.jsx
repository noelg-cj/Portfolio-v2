import React from 'react';
import Star from "../assets/Star.svg";
import Robot from "../assets/Robot.png";

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
    <div className='h-screen bg-white p-5 mt-14'>
        <div className='absolute top-0 left-96 h-full w-[1px] bg-black/35'></div>
        <div className='absolute top-0 right-96 h-full w-[1px] bg-black/35'></div>
        <div className='absolute bottom-32 right-0 w-full h-[1px] bg-black/35'></div>
        <div className='bg-black h-[60%] rounded-lg figma-container flex items-center justify-center relative'
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
                    top: `calc(${mousePos.y}px - 2.5rem)`,
                    left: `calc(${mousePos.x}px)`,
                }}
            >YOU</div>
            <div className='font-revelia text-9xl text-white text-center flex flex-col items-center justify-center'>
                <h1>I MAKE CLICKING ON WEBSITES</h1>
                <h1 className='text-primary hover:border-2 border-primary w-fit p-1'>WORTH IT</h1>
            </div>
        </div>
        <div className='flex justify-between mt-3'>
            <img src={Star} alt='star' className='w-12 h-12' />
            <img src={Star} alt='star' className='w-12 h-12' />
            <img src={Star} alt='star' className='w-12 h-12' />
            <img src={Star} alt='star' className='w-12 h-12' />
            <img src={Star} alt='star' className='w-12 h-12' />
            <img src={Star} alt='star' className='w-12 h-12' />
        </div>
        <img src={Robot} alt='robot' className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[38%] mx-auto mt-5 pointer-events-none' />
        <h5 className='absolute font-satoshi font-medium bottom-16 left-16'>DEVELOPER<br />& DESIGNER</h5>
        <h5 className='absolute font-satoshi font-medium bottom-16 right-36'>BASED IN<br />KERALA, IN</h5>
    </div>
  )
}

export default Landing