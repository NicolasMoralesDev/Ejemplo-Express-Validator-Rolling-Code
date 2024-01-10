

export const createUser = async (req, res) => {

try {
      console.log("prueba");

    res.status(201).json({
        msg: req.body
    })

} catch (error) {
    res.status(500).json({
        error: error
    })
}
  
};

export const getUser = async (req, res) => {




    res.status(201).json({
        products: [{}]
    })

};

export const deleteUser = async (req, res) => {


    console.log("prueba");

    res.status(201).json({
        msg: "eliminado con exito!!"
    })

};