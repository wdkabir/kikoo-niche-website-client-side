// import React, { useEffect } from 'react';
// import { Col, Form, Row, Button } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';

// const Review = () => {
//     useEffect(() => {
//         document.title = 'Review : Your Best Bikes Store'
//     }, []);
//     const { register, handleSubmit, reset } = useForm();
//     const onSubmit = (data) => {
//         fetch('https://rocky-fjord-15900.herokuapp.com/reviews', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'

//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => {
//                 if (res) {
//                     Swal.fire("WoW!",
//                         "Review SuccessFull!",
//                         "success"
//                     )
//                     reset();
//                 }
//             })
//             .catch((error) => {
//                 Swal.fire(
//                     "Something went wrong!",
//                     // ${error.message},
//                     "error"
//                 )
//             })
//     }
//     return (
//         <section>
//             <div className="container my-5 mb-5">
//                 <h2 className="text-center">Add Review</h2>
//                 <Form className="shadow-lg px-2 px-md-5 py-5 my-5 text-cyan" onSubmit={handleSubmit(onSubmit)}>
//                     <Row className="mb-3">
//                         <Form.Group as={Col} controlId="formGridName">
//                             <Form.Control
//                                 className="text-secondary fw-semi-bold"
//                                 placeholder="Typa Your Name"
//                                 {...register("name", { required: true })}
//                             />
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3">
//                         <Form.Group as={Col} controlId="formGridEmail">
//                             <Form.Control
//                                 placeholder="Type Your Email"
//                                 type="text"
//                                 className="text-secondary fw-semi-bold"

//                                 {...register("email", { required: true })}
//                             />
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3">
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                             <Form.Control as="textarea" rows={3}
//                                 placeholder="Type About Our Bikes Store"
//                                 {...register("description", { required: true })}
//                             />
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3">
//                         <Form.Group as={Col} controlId="formGridState">
//                         <Form.Select defaultValue="Select Your Rating" {...register("rating")} placeholder="Rating">
//                                 <option >Select Your Rating</option>
//                                 <option value="1">1</option>
//                                 <option value="1.5">1.5</option>
//                                 <option value="2">2</option>
//                                 <option value="2.5">2.5</option>
//                                 <option value="3">3</option>
//                                 <option value="3.5">3.5</option>
//                                 <option value="4">4</option>
//                                 <option value="4.5">4.5</option>
//                                 <option value="5">5</option>
//                         </Form.Select>
//                         </Form.Group>
//                     </Row>
//                     <div className="mt-3 text-center">
//                         <Button
//                             type="submit"
//                             className="px-3 py-2 fw-bold w-100"
//                         >
//                             Add Review
//                         </Button>
//                     </div>
//                 </Form>
//             </div>
//         </section>
//     );
// };

// export default Review;