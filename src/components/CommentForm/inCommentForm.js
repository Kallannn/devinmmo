import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {createComment} from '../../services/CommentLocalStorage.js'
import * as Yup from 'yup';
 
function CommentForm(props){
    
   return (
        <Formik
        initialValues={{ autor: '', content: ''}}
        validationSchema={Yup.object({
            autor: Yup.string().required('Required'),
            content: Yup.string().required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                createComment(props.pageEnum, props.articleId, values.autor, values.content)
                setSubmitting(false);
                props.submitFunc()
            },400);
        }}
        >
            <Form>
                <label htmlFor="autor">Nome</label>
                <Field name="autor" type="autor" placeholder="Nome"/>
                <ErrorMessage name="autor" />
                <br/>
                <label htmlFor="content">Comentário</label>
                <Field name="content" type="content" placeholder="Comentário" />
                <ErrorMessage name="content" />
                <br/>
                <button type="submit">Add comment</button>
            </Form>
        </Formik>
   );
 };

 export default CommentForm;