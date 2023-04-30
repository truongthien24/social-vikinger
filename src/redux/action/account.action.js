import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../core/firebase-config/firebase.config";

// Register user 
export const registerAccount = (data) => async(dispatch) => {
    try {
        dispatch(setLoading({
            status: 'isLoading'
        }))
        // Lấy collection từ firebase 
        const accountRef = collection(db, 'Account');
        const result = await getDocs(accountRef);
        const dataResult = result.docs.map((item)=> item.data());
        // ES6 => Tìm vị trí => Nếu tìm thấy vị trí sẽ xuất ra giá trị khác -1, và ngược lại
        const findIndex = dataResult.findIndex(item=>item.userName === (data.data.userName || data.userName));
        if(findIndex === -1) {
            setTimeout(async ()=> {
                // Tạo document trong collection Account 
                await addDoc(collection(db, 'Account'), {
                    ...data.data, createAt: serverTimestamp()});
                dispatch(setLoading({
                    status: 'done'
                }))
                // Thông báo
                Swal.fire({
                    icon: 'success',
                    title: 'Tạo tài khoản thành công !',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true
                })
                // Chuyển hướng người dùng về trang login
                if(data.data.loaiTaiKhoan === "guest") {
                    window.location.replace('/user/login');
                }
            }, 1000);
            return true;
        } else {
            // Trường hợp tài khoản đã tồn tại
            setTimeout(async ()=> {
                dispatch(setLoading({
                    status: 'done'
                }))
                
            }, 1000);
            return false;
        }
    } catch(error) {
        return false;
    }
} 