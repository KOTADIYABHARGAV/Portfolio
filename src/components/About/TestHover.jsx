function TestHover() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6">
            <button className="bg-blue-600 px-6 py-3 rounded-md text-lg hover:bg-yellow-200 hover:scale-105 transition duration-300 transform">
                Hover Me
            </button>

            <img
                src="/assets/Profile-pic.png"
                alt="Profile"
                className="w-40 h-40 rounded-full hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
}

export default TestHover;
