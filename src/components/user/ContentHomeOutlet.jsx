import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardMedia, Typography, IconButton, Stack } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function ContentHomeOutlet() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg',
        'https://img5.thuthuatphanmem.vn/uploads/2021/07/15/anh-3d-dep-buon_043316269.jpg',
        'https://i.pinimg.com/originals/07/f9/df/07f9df953582c38d9d38de1f044e7b06.png',
    ];

    const videoThumbnails = [
        { id: 1, title: 'Điệu nhảy gây sốt', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '699,000 lượt xem', duration: '05:58', desc: 'Diệu nhảy gây sốt' },
        { id: 2, title: 'Anh chàng sáng tạo trò mòt ngòi nhạy', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '2,733 lượt xem', duration: '15 phút', desc: 'Anh chàng sáng tạo' },
        { id: 3, title: 'Sẵn sàng ăn uống', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '30:34', duration: '30:34', desc: 'Sẵn sàng ăn uống' },
        { id: 4, title: 'Tỏi thâm chí còn không', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '555,000 lượt xem', duration: '02:05', desc: 'Tỏi thâm chí còn không' },
        { id: 5, title: 'Cộng ty trưng tói ở ngày đền cập ngu', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '3,000 lượt xem', duration: '11:10', desc: 'Cộng ty trưng tói' },
        { id: 6, title: 'Thử luồng 2 giò Mộ video', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '106,000 lượt xem', duration: '15:30', desc: 'Thử luồng 2 giò' },
        { id: 7, title: '2025日本最新恐怖片', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '344,000 lượt xem', duration: '11:10', desc: '2025日本最新恐怖片' },
        { id: 8, title: 'Tro gương nồng thơn đời trọn đời', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '2,528 lượt xem', duration: '12:12', desc: 'Tro gương nồng thơn' },
        { id: 9, title: '世界第1傭兵', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '110 lượt xem', duration: '11:13', desc: '世界第1傭兵' },
        { id: 10, title: 'Nhật lói chí trích điền rễ', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '3657 lượt xem', duration: '15:30', desc: 'Nhật lói chí trích' },
        { id: 11, title: 'Phát sóng trực tiếp', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: 'cái gì đó', duration: 'cái gì đó', desc: 'Phát sóng trực tiếp' },
        { id: 12, title: 'Nhà hàng quán phở sắn nghệo nhạy rượi', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '60 lượt xem', duration: '5:22', desc: 'Nhà hàng quán phở' },
        { id: 13, title: 'Thế giới điện ảnh',image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '170 lượt xem', duration: '5:24', desc: 'Thế giới điện ảnh' },
        { id: 14, title: 'Lên sóng', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: 'cái gì đó', duration: 'cái gì đó', desc: 'Lên sóng' },
        { id: 15, title: 'Điệu nhảy gây sốt 2',image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '699,000 lượt xem', duration: '05:58', desc: 'Điệu nhảy gây sốt 2' },
        { id: 16, title: 'Phát sóng trực tiếp', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: 'cái gì đó', duration: 'cái gì đó', desc: 'Phát sóng trực tiếp' },
        { id: 17, title: 'Nhà hàng quán phở sắn nghệo nhạy rượi',image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '60 lượt xem', duration: '5:22', desc: 'Nhà hàng quán phở' },
        { id: 18, title: 'Thế giới điện ảnh',image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '170 lượt xem', duration: '5:24', desc: 'Thế giới điện ảnh' },
        { id: 19, title: 'Lên sóng', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: 'cái gì đó', duration: 'cái gì đó', desc: 'Lên sóng' },
        { id: 20, title: 'Điệu nhảy gây sốt 2', image: 'https://anhcuoiviet.vn/wp-content/uploads/2022/09/de-thuong-2-724x965.jpg', views: '699,000 lượt xem', duration: '05:58', desc: 'Điệu nhảy gây sốt 2' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card sx={{ position: 'relative', width: '600px', margin: '0 auto' }}>
                        <CardMedia
                            component="img"
                            sx={{
                                height: 400,
                                width: '600px',
                                objectFit: 'cover',
                            }}
                            image={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                        />
                        {/* Title and Dots - Bottom Left */}
                        <Stack
                            direction="column"
                            spacing={1}
                            sx={{
                                position: 'absolute',
                                bottom: 16,
                                left: 16,
                            }}
                        >
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    padding: '4px 8px',
                                    borderRadius: 4,
                                }}
                            >
                                Điệu nhảy gây sốt
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    '& .dot': {
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                        '&.active': {
                                            backgroundColor: 'white',
                                        },
                                    },
                                }}
                            >
                                {images.map((_, index) => (
                                    <Box
                                        key={index}
                                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </Stack>
                        </Stack>
                        {/* Navigation Buttons - Bottom Right */}
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                position: 'absolute',
                                bottom: 16,
                                right: 16,
                            }}
                        >
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                                }}
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                                }}
                            >
                                <ChevronRightIcon />
                            </IconButton>
                        </Stack>
                    </Card>
                </Grid>
                {videoThumbnails.map((video) => (
                    <Grid item key={video.id} sx={{ width: 300 }}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    height: 200,
                                    width: 300,
                                    objectFit: 'cover',
                                }}
                                image={video.image}
                                alt={video.title}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
                                {video.title} <br />
                                {video.desc} <br />
                                {video.views} • {video.duration}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ContentHomeOutlet;