'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function Navbar() {
  const pathname = usePathname()
    const MenuItems = [
        {'path':'/', 'name':'home'},
        {'path':'/base64', 'name':'base64'},
        {'path':'/rot13', 'name':'rot13'}
    ]
 
  return (
    <nav>
      <div className='ui attached centered menu'>
        {/* <div className="ui container"> */}
          <span id='menu' style={{ display: 'flex'}}>
            {MenuItems.map((item) => {
                return(
                    <div className='item'>
                        <Link className={`link ${pathname === item.path ? 'active' : ''}`} href={item.path}>
                            {item.name}
                        </Link>
                    </div>
                )
                })}
          </span>
        </div>
      {/* </div> */}
    </nav>
  )
}