import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Ahmad List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ahmad-list"><a>Ahmad Listing</a></Link>
        </nav>
    );
}

export default Navbar;