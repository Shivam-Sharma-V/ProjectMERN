import React, { useEffect, useState } from 'react';
import BulkInsert from './AddShipment';
// import FilterShipments from './FilterShipments';
import './styles/FilterShipments.css';

const Shipments = () => {
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState([]);
    const[orderId,setOrderId] = useState('');
    const[awb,setAwb] = useState('');
    const[couriers,setCouriers] = useState('');
  
const filterRecord = () => {
    const newData = data.filter(x => x.orderId === (orderId ==="" ? x.orderId : orderId))
    .filter(y => y.awb === (awb ==="" ? y.awb : awb))
    .filter(z => z.couriers === (couriers ==="" ? z.couriers : couriers))
    setUserData(newData)
}

    const getData = () => {
        fetch('http://localhost:8080/getshipment').then((result) => {
            result.json().then((resp) => {
                setData(resp)
                setUserData(resp)
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='container-fluid'>
                <h5>Shipments</h5>
                <div className='row bg-light p-2 rounded'>
                    <div className='col-sm-7'></div>
                    <div className='col-sm-5'>
                        <button className='btn btn-info btn-secondary  text-light me-2' >Bulk Upload Shipments</button>
                        <button className='btn btn-info text-light me-2'
                            data-bs-toggle="modal" data-bs-target="#exampleModal">Add Shipments</button>
                        <button className='btn btn-info text-light'>Update Shipments Status</button>
                    </div>
                </div>


                <div className='row bg-light pt-5'>
                <div className='col-md-2'>
                    <lable>Period</lable>
                    <select className='form-control'>
                        <option>Last 7 days</option>
                        <option>Last 15 days</option>
                        <option>Last 30 days</option>
                    </select>
                </div>
                <div className='col-md-2'>
                    <lable>OrderID</lable>
                    <input type='text' value={orderId} onChange={(e)=>setOrderId(e.target.value)} className='form-control'/>
                </div>
                <div className='col-md-2'>
                <lable>AWB No.</lable>
                    <input type='text' value={awb} onChange={(e)=>setAwb(e.target.value)} className='form-control'/>
                </div>
                <div className='col-md-2'>
                    <lable>Carrier</lable>
                    <input type='text' value={couriers} onChange={(e)=>setCouriers(e.target.value)} className='form-control'/>
                </div>
                <div className='col-md-2'>
                    <label>Sort By</label>
                    <select className='form-control'>
                        <option>Date Added (Desc)</option>
                        <option>Date Added (asc)</option>
                    </select>
                </div>
                <div className='col-md-2 text-center  pt-4'>
                    <button className='btn  w-75 text-light fs-6' onClick={filterRecord} style={{"background" : "#ed721d"}}>Apply</button>
                </div>
            </div>


                {/* <div className='row bg-light p-3'>
                    <div className='col-sm-12'>
                        <div className='pb-3'>
                            <h6 className='fw-bold m-0' style={{ "fontFamily": "Calibri", "letterSpacing": "-.8px" }}>Current Carriers</h6>
                            <button className='btn btn-dark p-1 m-1' style={{ "fontSize": "12px" }}>All Records</button>
                        </div>
                        <div className='mb-4'>
                            <h6 className='fw-bold m-0' style={{ "fontFamily": "Calibri", "letterSpacing": "-.8px" }}>Current Status</h6>
                            <button className='btn btn-dark p-1 m-1' style={{ "fontSize": "12px" }}>All Records</button>
                        </div>
                        

                    </div>
                </div> */}

                <div className='row bg-light  rounded pt-3' >
                    <div className='col-sm-12' style={{"overflowX":"auto"}}>
                    <div className='pb-3' style={{ "display": "flex" }}>
                            <span className='m-0' style={{ "fontFamily": "Calibri", "letterSpacing": ".8px" }}>Total : 55024 Shipments</span>
                            <div className='align-right'>
                                <button className='btn btn-info download-shipment text-light' >Download Shipments</button>
                            </div>
                        </div>
                        <table className='table text-center' style={{ "fontSize": "13px", }} >
                            <thead style={{ "background": "#ced4da" }}>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Tracking Details</th>
                                    <th>Current Status</th>
                                    <th>Customer Details</th>
                                    <th>Destination</th>
                                    <th>Pickup Date</th>
                                    <th>Expected Devivery</th>
                                    <th>En Route Days</th>
                                    <th>Order Date</th>
                                    <th>Date Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    userData.map((item, index) => 
                                        <tr>
                                            <td>{item.orderId}</td>
                                            <td>{item.couriers}<br />{item.awb}</td>
                                            <td><button className='btn btn-warning text-light'>No Information yet</button></td>
                                            <td>{item.name}<br />{item.mobile}<br />{item.email}</td>
                                            <td>N/A</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>1</td>
                                            <td>N/A</td>
                                            <td>{item.currentDate}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <BulkInsert />
        </>

    );
};

export default Shipments;