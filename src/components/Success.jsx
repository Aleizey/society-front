
const Success = () => {
    return (
        <>
            <div className='success shadow-2xl text-nowrap justify-center flex flex-row items-center space-x-17 fixed
                 rounded-xs bottom-0 right-0 m-5 z-300 bg-sky-200 text-sky-500 p-3.5 text-lg '>
                <p>Realizado con éxito</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            </div>
        </>
    );
}

export default Success;