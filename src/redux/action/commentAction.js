import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { db } from "../../core/firebase-config/firebase.config";

// Create Comment
export const createComment = (data) => async(dispatch) => {
    try {
        toast.loading('Loading...');

        setTimeout(async ()=> {
            // Tạo document trong collection Comment 
            await addDoc(collection(db, 'Comment'), {
                ...data, 
                fromUID: JSON.parse(localStorage.getItem('jwt')), 
                createdAt: serverTimestamp(),
            });
            // Thông báo
            toast.dismiss();
            toast.success('Create successfully!')
        }, 1000);
        return true;
    } catch(error) {
        toast.dismiss();
        toast.error('Create error!')
        return false;
    }
}

// Update Comment
export const updateComment = (data) => async (dispacth) => {
    try {
        toast.loading('Loading...');
        const CommentRef = doc(db,'Comment', data.id);
        setTimeout(async ()=> {
            // Update document trong collection Comment 
            await updateDoc(CommentRef, data.data);
            // Thông báo
            toast.dismiss();
            toast.success('Update successfully!')
        }, 1000);
    } catch(err) {
        toast.dismiss();
        toast.error('Update error!')
        return false;
    }
}

// Delete Comment
export const deleteComment = (idComment) => async (dispatch) => {
    try {
        toast.loading('Loading...');
        await deleteDoc(doc(db, "Comment", idComment));
        setTimeout(()=> {
            toast.dismiss();
            toast.success('Delete success!')
        }, 1000)
    } catch (err) {
        toast.dismiss();
        toast.error('Delete error!')
        return false;
    }
} 