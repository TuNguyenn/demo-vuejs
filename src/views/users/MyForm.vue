<template>
    <div class="product-info">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h3 class="display-5">User Infomation</h3>
            <router-link to="/user">Back</router-link>
        </div>
    
        <div class="contianer">
            <form>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">User name</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control"/>
                </div>
                </div>
                <div class="form-group row">
                    <lable for="inputPassword" class="col-sm-2 col-form-label">Email</lable>
                    <div class="col-sm-9">
                        <input type="text" class="form-control"/>
                    </div>
                </div>
                <div class="form-group row">
                    <lable for="inputPassword" class="col-sm-2 col-form-label">User description</lable>
                    <div class="col-sm-9">
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <lable for="inputPassword" class="col-sm-2 col-form-label"></lable>
                    <div class="d-flex">
                        <div class="col-sm-4 text-left">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                        <div class="col-sm-4 text-left">
                            <button type="reset" class="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                    
                </div>
    
            </form>
        </div>
    </div>
    
</template>