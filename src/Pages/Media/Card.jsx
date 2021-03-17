import React from 'react';
import { useHistory } from 'react-router';

function Card({data}) {
    const history=useHistory()
    return (
        <div className='col-12 col-md-6 col-lg-4 colxl-3 my-3 curser' onClick={()=>history.push(`/artical/${data.id}`)}>
            <img src={data.img} alt={data.id} className='w-100'/>
            <div className="py-2">
                <div className="d-flex justify-content-between">
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
                <div className="pt-3">
                    {
                        data.title
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;