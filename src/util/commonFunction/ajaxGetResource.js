function getResource(params , success , error){
  jQuery.ajax({
    type: 'GET',
    url: nativeData ? params.NativeUrl : (config_service_url + params.url),
    dataType: 'json',
    traditional: true, // 可以传递数组参数
    data : params.data,
    async : !!params.async,
    // complete: complete,
    success: success,
    error : error
  });
}
export default getResource;
