let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

const { Next } = require('react-bootstrap/esm/PageItem');
//Import th vehicle model

let VehicleSchema = require('../Models/Vehicle');

//Creating the vehicle

router.route('/create-vehicle').post((req, res, next) => {
    VehicleSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
}
);

//reading Vehicle

router.route('./').get((req, res) => {
    VehicleSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})



// get a particular details

router.route('/edit-vehicle/:id').get((req, res) => {
    VehicleSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})



// Update Vehicle data

router.route('/update-vehicle/:id').put((req, res, next) => {
    VehicleSchema.findByIdAndUpdate(req.params.id, {
        $set:req.body
    }, (error, data => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
            console.log('Vehicle updated Successfully')
        }
    }))
})

//Delete Vehicle data

router.route('/delete-vehicle/:id').delete((req, res, next) => {
    VehicleSchema.findByIdAndRemove(req, params.id, (error,data) => {
        if(error) {
            return next (error)
        } else{
            res.status(200).json({
                msg:data
            })
        }
    })
})

module.exports = router;
