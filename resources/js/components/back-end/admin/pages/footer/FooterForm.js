import React from 'react'

const FooterForm = () => {

const formStyleOne = {
    marginLeft: '300px',
    marginTop: '4%',
    }

  return (
    <div>
        <div className="container">
            <div className="row" style={ formStyleOne }>
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterForm
