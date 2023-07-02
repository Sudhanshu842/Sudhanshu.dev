import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Social = () => {

    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={20} />
                </>
            ),
            href: 'https://www.linkedin.com/in/sudhanshu-doble/?originalSubdomain=in',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>GitHub <FaGithub size={20} />
                </>
            ),
            href: 'https://github.com/Sudhanshu842',


        },
        {
            id: 3,
            child: (<>Mail <HiOutlineMail size={20} />
            </>
            ),
            href: 'mailto: sudhanshudoble842@gmail.com',

        },
        {
            id: 4,
            child: (<>Resume <BsFillPersonLinesFill size={20} />
            </>
            ),
            href: '/src/assets/Sudhanshu_Doble_842.pdf',
            style: 'rounded-br-md',
            download: true,
        },

    ]

    return (


        <div className='flex flex-col top-[45%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) =>
                (
                    // eslint-disable-next-line no-useless-concat
                    <li key={id} className={'flex justify-between items-center w-40 h-12 sm:h-14 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-600 duration-300 hover:bg-black' + ' ' + style}>
                        <a
                            href={href}
                            className='flex justify-between  pl-2 items-center 
                        w-full text-white '
                            download={download}
                            target='blank'>
                            {child}
                        </a>
                    </li>

                ))}


            </ul>
        </div>






    )

}

export default Social


