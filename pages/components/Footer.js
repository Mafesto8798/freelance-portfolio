

export default function Footer(){
    return(
        <footer className="flex items-center justify-center w-full h-48 bg-gray-800 text-white py-6 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Kenny Chavarriaga. All rights reserved.</p>
        </footer>
    )
}