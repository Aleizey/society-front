export default function ApiLoading() {

    return (
        <div className="loading">
            <div className="overflow-y-hidden fixed inset-0 z-300 flex justify-center items-center bg-opacity-50">
                <div className="size-25 rounded-full animate-spin border-8 border-dashed border-sky-500 border-t-transparent">
                </div>
            </div>
        </div>
    )
}