
import Chef from '@/components/ChefComponent/Chef'
import React from 'react'


const imgArr = [
    {
        "src": '/chiefs/chefs_1.jpg',
        "name": 'Walter White',
        "position": ' Master Chef',
        "description": 'Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.'
    },
    {
        "src": '/chiefs/chefs_2.jpg',
        "name": 'Sarah Jhonson',
        "position": ' Patissier',
        "description": 'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.'
    },
    {
        "src": '/chiefs/chefs_3.jpg',
        "name": 'William Anderson  ',
        "position": 'Cook',
        "description": 'Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.'
    },
]

const ChefPageContainer = () => {
    return (
        <>
            <main className='bg-[#EEEEEE] pb-10 md:px-20'>
                <div className='py-14 flex flex-col items-center justify-center '>
                    <p className='text-gray-500'>CHEFS</p>
                    <p className='text-2xl '>OUR <span className='text-red-700'> PROFESSIONAL</span>CHEFS <span></span></p>
                </div>
                <div className='md:flex'>
                    {
                        imgArr.map((item, index) => {
                            return <Chef
                                item={item}
                                key={index}
                            />
                        })
                    }
                </div>
            </main>

        </>
    )
}

export default ChefPageContainer