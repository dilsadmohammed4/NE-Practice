import {Router, Request, Response} from "express";
import {body, validationResult} from "express-validator";
import bcrypt from "bcrypt";

const usersRouter: Router = Router();
usersRouter.post("/register", [
    body('username').not().isEmpty().isEmail().withMessage('Username is required'),
    body('password').isStrongPassword({minLength: 10}).withMessage('Password is not strong')
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    try {
        const {username, password} = req.body;

        //encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //decrypt password
        // const isMatch = await bcrypt.compare("Dilsad@1234", hashPassword);
        // if (isMatch) {
        //     return res.status(200).json({
        //         msg: "Valid password"
        //     })
        // } else {
        //     return res.status(400).json({
        //         msg: "Invalid password"
        //     })
        // }

        return res.status(200).json({
            msg: "Register a user",
            formData: {
                username: username,
                password: password,
                hashPassword: hashPassword
            }
        })
    } catch (e: any) {
        res.status(500).json({
            error: e.message
        })
    }
});

export default usersRouter;
