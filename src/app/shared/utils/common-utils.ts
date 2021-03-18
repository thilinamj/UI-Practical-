export class CommonUtils {

    public static redirectTo(router: any, uri: string, params?: any) {
        router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          if (params) {
            router.navigate([uri], { queryParams: params });
          } else {
            router.navigate([uri]);
          }
        });
    }

}
