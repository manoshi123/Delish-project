import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useMemo, useState, useEffect } from "react";
import { DatePicker, Stack } from "rsuite";
import {
  isBefore,
  isAfter,
  addDays,
  startOfDay,
  format,
  addMinutes,
} from "date-fns";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Booking_form() {
  const [bookingData, setBookingData] = useState(
    JSON.parse(localStorage.getItem("booking"))
  );

  const startTime = "12:00",
    endTime = "24:00",
    interval = 60;
  const timeSlots = useMemo(() => {
    const slots = [];
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    let current = new Date();
    current.setHours(startHour, startMinute, 0, 0);

    const end = new Date();
    end.setHours(endHour, endMinute, 0, 0);

    while (isBefore(current, end)) {
      const slotStart = format(current, "hh:mm a");
      const slotEnd = format(addMinutes(current, interval), "hh:mm a");
      slots.push(`${slotStart} - ${slotEnd}`);
      current = addMinutes(current, interval);
    }

    return slots;
  }, [startTime, endTime, interval]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("booking", JSON.stringify(data));
    setBookingData(data);
    Swal.fire({
      title:
        "<strong>Thank you for choosing <span>Delish!</span></strong>",
      icon: "success",
      html: `
    <p>
      We’re pleased to confirm your reservation:

    </p>

     <ul>
              <li>
                <strong>Number Of Guest:</strong> ${
                  data?.number_of_guest
                }
              </li>
              <li>
                <strong>Booking Date:</strong>
                ${format(new Date(data.booking_date), "MMMM dd, yyyy")}
              </li>
              <li>
                <strong>Booking Time:</strong> ${data?.booking_slot}
              </li>
            </ul>
  `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `Cancel Booking`,
      cancelButtonAriaLabel: "Cancel Booking",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDismissed) {
        localStorage.removeItem("booking");
        setBookingData(null);
        Swal.fire({
          title:
            "<strong>Thank you for choosing <u>[Restaurant Name]</u>!</strong>",
          icon: "success",
          html: `
            <p>
              We're sorry to see you go! If this was a mistake or you’d like to reschedule, feel free to make a new reservation anytime.
            </p>
           `,
          showCloseButton: true,
          focusConfirm: true,
          confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
          confirmButtonAriaLabel: "Thumbs up, great!",
        });
      }
    });
  };
  const errorPlacement = "rightStart";

  return (
    <section className="book_form">
      <Container>
        <div className="menu_content text-center pb-5">
          <h6>make reservation</h6>
          <h2>Book A Table</h2>
          <hr></hr>
          <img src="/images/dot_red.svg" />
        </div>
        <p className="text-center mb-5">
          Restaurant will be open for all days, Sunday night will be closed, All
          booking payment is secured with
          <br /> credit card, no charges will be applly for online booking. no
          refundable.
        </p>
      </Container>
      <div className="reserved_sec">
        <Container>
          <h4>Your Booking Details</h4>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3 align-items-end">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>NUMBER OF GUEST *</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  {...register("number_of_guest", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                >
                  <option value="">Person</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} Person{i + 1 > 1 ? "s" : ""}
                    </option>
                  ))}
                </Form.Select>

                {errors.number_of_guest && (
                  <span style={{ color: "red", fontSize: "14px" }}>
                    {errors?.number_of_guest?.message}
                  </span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>SELECT DATE *</Form.Label>
                <input
                  type="hidden"
                  {...register("booking_date", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                <Stack spacing={10} direction="column" alignItems="flex-start">
                  <DatePicker
                    placeholder="Select A Date"
                    format="MMMM dd, yyyy"
                    showMeridiem
                    style={{ width: 260 }}
                    oneTap
                    shouldDisableDate={(date) => {
                      const today = startOfDay(new Date());
                      const maxDate = addDays(today, 14);
                      return isBefore(date, today) || isAfter(date, maxDate);
                    }}
                    onChange={(e) => {
                      setValue("booking_date", e.toString());
                    }}
                  />

                  {errors.booking_date && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors?.booking_date?.message}
                    </span>
                  )}
                </Stack>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>SELECT TIME*</Form.Label>
                <Form.Select
                  placeholder="Choose..."
                  {...register("booking_slot", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                >
                  <option value={""}>Choose Slot...</option>
                  {timeSlots.map((slot, idx) => (
                    <option key={idx} value={slot}>
                      {slot}
                    </option>
                  ))}
                </Form.Select>

                {errors.booking_slot && (
                  <span style={{ color: "red", fontSize: "14px" }}>
                    {errors?.booking_slot?.message}
                  </span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Button variant="primary" type="submit">
                  Book Reservation
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Container>
        {bookingData && (
          <Container>
            <h4>Book a Table</h4>

            <ul className="booking_details">
              <li>
                <strong>Number Of Guest:</strong> {bookingData?.number_of_guest}
              </li>
              <li>
                <strong>Booking Date:</strong>{" "}
                {format(new Date(bookingData.booking_date), "MMMM dd, yyyy")}
              </li>
              <li>
                <strong>Booking Time:</strong> {bookingData?.booking_slot}
              </li>
            </ul>

            <Button
              variant="outline-danger"
              onClick={() => {
                localStorage.removeItem("booking");
                setBookingData(null);
              }}
            >
              Cancel Booking
            </Button>
          </Container>
        )}
      </div>
    </section>
  );
}
