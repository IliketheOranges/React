import Link from 'next/link'

function Navbar(){
    return(
    <nav className='bg-orange-400 m-3 h-10 p-2'>
        <ul className='flex gap-4'>
            <li>
              <Link href="./../">Home</Link>
            </li>
            <li>  
              <Link href="./../about">About</Link>
            </li>
            <li>  
              <Link href="./../users">Users</Link>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;