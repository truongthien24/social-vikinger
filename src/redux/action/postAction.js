import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { db } from "../../core/firebase-config/firebase.config";

// Create Post
export const createPost = (data) => async(dispatch) => {
    try {
        toast.loading('Loading...');

        setTimeout(async ()=> {
            // Tạo document trong collection Account 
            await addDoc(collection(db, 'Post'), {
                ...data,
                postIDPost: JSON.parse(localStorage.getItem('jwt')), 
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

// Update Post
export const updatePost = (data) => async (dispacth) => {
    try {
        toast.loading('Loading...');
        const postRef = doc(db,'Post', data.id);
        setTimeout(async ()=> {
            // Update document trong collection Post 
            await updateDoc(postRef, data.data);
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

// Delete post
export const deletePost = (idPost) => async (dispatch) => {
    try {
        toast.loading('Loading...');
        await deleteDoc(doc(db, "Post", idPost));
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