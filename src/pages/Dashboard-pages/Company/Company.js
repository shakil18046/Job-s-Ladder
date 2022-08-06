import React from "react";
import image1 from "../../../asset/company.jpg";
import "./Company.css";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import miami from "../../../asset/miami.jpg";
import "react-tabs/style/react-tabs.css";
import people from "../../../asset/testimonial/client-3.png";
import { useForm } from "react-hook-form";
import { HiOutlineCamera } from "react-icons/hi";
import { FiEdit } from 'react-icons/fi';







const Company = () => {

    // dynamic way to save image bb
    const imageStorageKey = "4dab8fd03df7f5dbf2aafd109eaffcf5";
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    console.log(result.data.url)
                }
            });
    };


    //post method using to fetch all details -------------------------------------------------------

    const handleCompanyDetails = event => {
        event.preventDefault();
        const companyName = event.target.name.value;
        const companyOverview = event.target.overview.value;
        const companyspecialties = event.target.specialties.value;
        console.log(companyName, companyOverview, companyspecialties);


        const allCompanyDetails = { companyName, companyOverview, companyspecialties }



        fetch('', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allCompanyDetails),
        })
            .then((response) => response.json())
            .then((allCompanyDetails) => {
                console.log('Success:', allCompanyDetails);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <>

            {/* cover photo for company */}
            <div className="bg-base-100 ">
                <figure className="relative">
                    <div>
                        <div className=" ">
                            {" "}
                            <div>
                                <a href="#my-modal-2" for="my-modal-4" class="btn  modal-button border border-primary bg-white absolute bottom-0 right-0 text-black hover:bg-white hover:border-primary justify-end ">
                                    <HiOutlineCamera className="text-2xl"></HiOutlineCamera> Edit Cover photo
                                </a>
                                {/* <label for="my-modal-4" class="btn modal-button">open modal</label> */}

                                <div class="modal" id="my-modal-2">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Edit Cover picture!</h3>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div>
                                                <input
                                                    type="file"
                                                    className="input input-bordered w-full max-w-xs"
                                                    {...register("image", {
                                                        required: {
                                                            value: true,
                                                            message: "Image is Required",
                                                        },
                                                    })}
                                                />
                                            </div>
                                            <div class="modal-action">
                                                <input
                                                    className="btn w-full max-w-xs text-white"
                                                    type="submit"
                                                    value="Add"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="h-96 cover-img" src="https://i.ibb.co/Bggt5pt/Screenshot-5.png" alt="Shoes" />
                    </div>
                </figure>
                <div>


                    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                    <label for="my-modal-4" class="modal cursor-pointer">
                        <label class="modal-box relative" for="">
                            <form>
                                {/* register your input into the hook by invoking the "register" function */}
                                <input defaultValue="test" {...register("example")} />

                                {/* include validation with required or other standard HTML validation rules */}
                                <input {...register("exampleRequired", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input type="submit" />
                            </form>
                        </label>
                    </label>

                </div>

            </div>

            <div className="mt-3">
                <button className="btn btn-outline border border-primary">
                    Visit website <HiExternalLink className="ml-1" />
                </button>
                <div>

                </div>
            </div>
            {/* make dynamic name ,about and details dynamic form*/}

            {/* <!-- The button to open modal --> */}
            <label for="my-modal-4" class="btn btn-outline mt-3 text-black-600 border border-primary">Edit Details <FiEdit className="ml-1" /></label>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <form onSubmit={handleCompanyDetails}>
                        <input type="text" name="name" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                        <br /> <br />
                        <textarea class="textarea textarea-primary" name="overview" placeholder="Overview"></textarea>
                        <br /> <br />
                        <textarea class="textarea textarea-primary" name="specialties" placeholder="Specialties" ></textarea>
                        <br /> <br />
                        <input className="input input-bordered input-primary " type="submit" value="Add Details" />
                    </form>

                </label>

            </label>


            {/* edit name dynamic way  */}

            <div className="text-4xl mt-3 mb-3 text-secondary">Miami HEAT</div>

            <Tabs className="tab-customize ">
                <TabList >
                    <Tab>About</Tab>
                    <Tab>jobs</Tab>
                    <Tab>People</Tab>
                </TabList>

                {/* about tab panel */}
                <TabPanel>

                    <h2 className="text-xl font-bold text-primary">Overview</h2>

                    <div>
                        <p className="text-lg p-5   shadow-xl">
                            Nordstone is a global software consultancy headquartered in
                            London. We are a team of world-class developers, designers,
                            product strategists and growth hackers. Together we have built
                            100+ products on mobile, web and on the blockchain. Nordstone’s
                            CEO has a professional background in Banking and several years ago
                            he took the leap of faith and stepped out of the corporate world
                            to launch his first venture - the UK’s first mobile app combating
                            loneliness and scaled the product to 70+ countries. He now leads
                            Nordstone, a global software consultancy, partnering with
                            entrepreneurs and businesses to turn their visions into reality.
                            We are not your ordinary consultancy. Nordstone is built by
                            experienced people who have been on the other side of the table.
                            We treat every project as if it was our own, from startup ventures
                            to enterprise brands.
                        </p>
                    </div>

                    <div className=" mb-5 ">

                        <h2 className="text-lg font-bold mt-2 text-primary">Specialties</h2>
                        <div className=" p-5  shadow-xl">
                            Mobile App Development, iOS, Android, UI/UX Designs, Product Market
                            Fit, In-App Purchases, Backend Development, Machine Learning, APIs,
                            Google Play Store, Apple App Store, Frontend Development,
                            Blockchain, NFTs, Web Development, and Database Structuring
                        </div>

                    </div>
                </TabPanel>

                {/* jobs tab panel */}
                <TabPanel>
                    <div class=" w-96 rounded  align-middle p-4 shadow-lg shadow-blue-500/50 hover:bg-white-700 border	mb-3">
                        <figure>
                            {" "}
                            <img className="h-60 w-96 rounded" src={miami} alt="" />
                        </figure>
                        <div class="">
                            <h1 class="text-xl font-bold">Mern Stack Developer</h1>
                            <p className="font-bold ">Miami and Drive Way</p>
                            <div class=" justify-end">
                                <span>
                                    <small className="font-light">1 day ago</small>
                                </span>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* people tab panel */}
                <TabPanel>
                    <div class=" w-96 rounded text-center  p-4 shadow-lg shadow-blue-500/50 hover:bg-white-700 border mb-3">
                        <div class="avatar ">
                            <div class="w-24 rounded-full">
                                <img src={people} />
                            </div>
                        </div>
                        <div class="">
                            <h3 class="text-xl font-bold">Job's Ladder Limited</h3>
                            <div class=" justify-end">
                                <span>
                                    <small className="font-light">
                                        Actively looking for Full-time opportunities.
                                    </small>
                                </span>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default Company;
