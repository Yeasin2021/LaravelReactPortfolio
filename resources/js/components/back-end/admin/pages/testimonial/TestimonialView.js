
import React from 'react'

const TestimonialView = () => {
    const formStyleOne = {
        marginLeft: '300px',
        marginTop: '4%',
        }
  return (
        <div class="container">
            <div class="row" style={ formStyleOne }>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Profession</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TestimonialView
