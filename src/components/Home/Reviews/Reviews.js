import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useReview from '../../../Hooks/useReview';
import { Card } from 'react-bootstrap';
import Rating from '../../Shared/Rating/Rating';




const Reviews = () => {
    const [review] = useReview();
    console.log(review)
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="container my-5" data-aos-duration="1000">
            <div className="row">
                <div className="col-md-12">
                <div className="container">
                <h2 className="text-uppercase text-center mb-4">Reviews</h2>
                <Slider {...settings}>
                    {
                        review?.map(review => (
                            <div>
            <Card className="mx-2">
                <Card.Body>
                    <Card.Title className="card-title text-capitalize">{review?.name}</Card.Title>
                    <Card.Text>
                    <div className="card-body py-3">
                            <p className="card-title">{review?.email}</p>
                        </div>
                        <div className="card-body py-3">
                            <p className="card-title">{review?.description.slice(0,80)}</p>
                            <Rating rating={review?.rating}></Rating>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
                        )
                        )
                    }
                </Slider>
            </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;