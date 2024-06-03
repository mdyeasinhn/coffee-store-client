import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const UpdateCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(UpdateCoffee);
        // send data to the server
        fetch(`https://coffee-making-server-three.vercel.app/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(UpdateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
}
    
    return (
        <div className="bg-[#F4F3F0] p-24" >
            <h2 className="text-3xl font-extrabold text-center mb-4">Update coffee</h2>
            <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
           <form onSubmit={handleUpdateCoffee}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Coffee name" className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Availabe Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="quantity"  defaultValue={quantity} placeholder="Availabe  Quantity" className="input input-bordered w-full"/>
                    </label>
                </div>
            </div>
            {/* form supplier and taste row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier"  defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="taste"  defaultValue={taste} placeholder="Taste" className="input input-bordered w-full"/>
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category"  defaultValue={category} placeholder="Category" className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full"/>
                    </label>
                </div>
            </div>
            {/* form photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo"  defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full"/>
                    </label>
                </div>
               
            </div>
            <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C]" />
           </form>
        </div>
    );
};

export default UpdateCoffee;