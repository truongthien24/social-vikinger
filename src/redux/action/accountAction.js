import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { db } from "../../core/firebase-config/firebase.config";

// Register user 
export const registerAccount = (data) => async(dispatch) => {
    try {
        // dispatch(setLoading({
        //     status: 'isLoading'
        // }))
        // Lấy collection từ firebase 
        toast.loading('Loading...');

        const accountRef = collection(db, 'Account');
        const result = await getDocs(accountRef);
        const dataResult = result.docs.map((item)=> item.data());
        // ES6 => Tìm vị trí => Nếu tìm thấy vị trí sẽ xuất ra giá trị khác -1, và ngược lại
        const findIndex = dataResult.findIndex(item=>item.userName === (data.userName || data.userName));
        if(findIndex === -1) {
            setTimeout(async ()=> {
                // Tạo document trong collection Account 
                await addDoc(collection(db, 'Account'), {
                    ...data, 
                    createAt: serverTimestamp(),
                    userAvatar: '',
                    userBackground: '',
                    userLevel: 1,
                    userPath: '',
                    badgeList: [
                    ],
                    userPreviewStats: {
                        numberPost: 0,
                        numberFriends: 0,
                        numberVisited: 0,
                        description: "Hello!"
                    },
                    userSocial: [
                    ]
                });

                // dispatch(setLoading({
                //     status: 'done'
                // }))
                // Thông báo
                toast.dismiss();
                toast.success('Create successfully!')
            }, 1000);
            return true;
        } else {
            // Trường hợp tài khoản đã tồn tại
            setTimeout(async ()=> {
                // dispatch(setLoading({
                //     status: 'done'
                // }))
                toast.dismiss();

                toast.error('Account already exists!')

            }, 1000);
            return false;
        }
    } catch(error) {
        return false;
    }
} 


// Login account
// Đăng nhập user
export const loginAccount = (data) => async (dispatch) => {
    try {
        toast.loading('Loading...');
        const accountRef = collection(db, 'Account');
        const result = await getDocs(accountRef);
        
        const dataResult = result.docs.map((doc)=> ({...doc.data(), id: doc.id}));

        const findUser = dataResult?.filter((item)=>  (item?.userName === data?.userName || item?.email === data?.userName) && item?.password === data?.password );

        if(findUser.length > 0) {
            if(findUser[0].role === 'guest') {
                setTimeout(async()=> {
                    toast.dismiss();
                    toast.success('Login success');

                    await dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: {
                            data: findUser,
                            status: 200
                        }
                    })
                }, 1000)
            } else {

            }
        } else {
            setTimeout(()=> {
                toast.dismiss();
                toast.error('Incorrect username or password !');
            }, 1000)
        }
    }
    catch(error) {
        return false;
    }
}


// Get Profile by ID
export const getProfileByID = (id) => async(dispatch) => {
    try {
        const accountRef = collection(db, 'Account');
        const result = await getDocs(accountRef);
        const resultFilter = result.docs.filter(item => item.id === id);
        return {...resultFilter[0].data(), id: resultFilter[0].id};
    } catch (err) {
        return false;
    }
}