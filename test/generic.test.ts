describe('generic', () => {
    interface Mahasiswa {
        id: number;
        name: string;
    }

    interface Matkul {
        id: number;
        name: string;
    }

    interface Response<T> {
        status: number;
        message: string;
        data: T;
    }

    it('basic test', () => {
        const cetakID = <T>(id: T) => {
            console.log(id);
        }

        cetakID<string>('aditya');
        cetakID<number>(1);
        cetakID<boolean>(true);

        const mhsResponse: Response<Mahasiswa> = {
            status: 200,
            message: 'success',
            data: {
                id: 1,
                name: 'Aditya'
            }
        }

        console.info(mhsResponse);

        const matkulResponse: Response<Matkul> = {
            status: 200,
            message: 'success',
            data: {
                id: 1,
                name: 'Matematika'
            }
        }

        console.info(matkulResponse);
    });
});