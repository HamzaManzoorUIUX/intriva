import React from 'react';
import { useHistory } from 'react-router';

function Card({data}) {
    const history=useHistory()
    return (
        <div className='col-12 col-md-6 col-lg-4 colxl-3 my-3 curser ' onClick={()=>history.push(`/artical/${data.id}`)}>
           <div className='navBorder h-100'>

            <img src={data.img} alt={data.id} className='w-100 myCardImg'/>
            <div className="py-2">
                <div className="d-flex justify-content-between font-weight-bold">
                    <div>
                        {
                            data.catagory
                        }
                    </div>
                    <div className='text-scandary'>
                        {
                            data.date
                        }
                    </div>
                </div>
                <div className="">
                    {
                        data.title
                    }
                </div>
            </div>
        </div>
                    </div>
    );
}

export default Card;