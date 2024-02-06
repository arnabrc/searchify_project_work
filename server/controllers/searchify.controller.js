// DB 
const db = require('../database/db')

// Searchify Model
const searchify = require('../models/Searchify');

// Get All Searchify
exports.searchify_details = async (req, res, next) => {
    // await searchify.find({}).then((data) => {
    //     return res.status(200).json(data);
    // }).catch((error) => {
    //     return next(error);
    // });

    await searchify.aggregate(
        [
            {
                $match: {}
            },
            {
                $project: {
                    title: 1,
                    description: 1,
                    _id: 0
                }
            }
        ]
    ).then((data) => {
        return res.status(200).json(data);
    }).catch((error) => {
        return next(error)
    });
};

// Get single searchify
exports.searchify_detail = async (req, res, next) => {
    // await Searchify.findById({'title': req.body.title})
    //     .then((data) => {
    //         return res.status(200).json(data);
    //     }).catch((error) => {
    //         return next(error)
    //     });

    await searchify.aggregate(
        [
            {
                $match: {
                    $text: {
                        $search: req.body.title
                    }
                }
            },
            {
                $project: {
                    title: 1,
                    description: 1,
                    _id: 0
                }
            },
            {
                $sort: {
                    score: {
                        $meta: 'textScore'
                    }
                }
            }
        ]
    ).then((data) => {
        return res.status(200).json(data);
    }).catch((error) => {
        return next(error)
    });
};