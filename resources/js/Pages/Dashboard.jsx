import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';


export default function Dashboard({ auth }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }


    // console.log('props last :', auth)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200 m-2">
                        <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full " style={{ width: '98%' }} onChange={(title) => setTitle(title.target.value)} value={title} name='judul' />
                        <input type="text" placeholder="Deskripsi" className="input input-bordered w-full m-2" style={{ width: '98%' }} onChange={(description) => setDescription(description.target.value)} value={description} name='description' />
                        <input type="text" placeholder="Kategori" className="input input-bordered w-full m-2" onChange={(category) => setCategory(category.target.value)} value={category} name='category' />
                        <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
