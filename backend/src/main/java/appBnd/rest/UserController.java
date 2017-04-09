package appBnd.rest;

import appBnd.model.User;
import org.springframework.web.bind.annotation.*;

import appBnd.service.intf.UserService;

import java.util.List;

@RestController
public class UserController {
    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value="/user/get/json", method=RequestMethod.GET, produces="application/json")
    public @ResponseBody List<User> userGetJson(){
        return this.userService.user();
    }
}